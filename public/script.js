document.addEventListener('DOMContentLoaded', () => {
    // このファイルに直接書かれている初期キャラクターデータ
    let allCharacters = [];
    let currentParty = [];

    const weapons = { /* 省略: 武器リスト */ };
    const artifactSets = [/* 省略: 聖遺物リスト */];

    // DOM要素取得
    const characterListDiv = document.getElementById('character-list');
    const partySlots = document.querySelectorAll('.party-slot');
    const clearPartyButton = document.getElementById('clear-party');
    const searchBar = document.getElementById('search-bar');
    const elementFilter = document.getElementById('element-filter');
    const weaponFilter = document.getElementById('weapon-filter');
    const addForm = document.getElementById('add-character-form');
    const imageUploader = document.getElementById('imageUploader');
    const uploadButton = document.getElementById('uploadButton');
    const uploadStatus = document.getElementById('uploadStatus');
    const hiddenImageUrl = document.getElementById('char-image-url');

    async function initializeApp() {
        await fetchCharacters();
        renderCharacters();
        loadParty();
    }

    async function fetchCharacters() {
        try {
            const response = await fetch('/api/characters');
            if (!response.ok) throw new Error('サーバーからデータを取得できませんでした。');
            allCharacters = await response.json();
        } catch (error) {
            console.error('キャラクターの読み込みに失敗:', error);
            allCharacters = [];
        }
    }

    async function deleteCharacter(id, name) {
        if (confirm(`「${name}」を本当に削除しますか？`)) {
            try {
                const response = await fetch(`/api/characters/${id}`, { method: 'DELETE' });
                if (!response.ok) throw new Error('削除に失敗しました。');
                alert('キャラクターを削除しました。');
                await initializeApp();
            } catch (error) {
                alert(error.message);
            }
        }
    }

    function renderCharacters(filteredCharacters = allCharacters) {
        characterListDiv.innerHTML = '';
        filteredCharacters.forEach(char => {
            const container = document.createElement('div');
            container.classList.add('character-item-container');

            const img = document.createElement('img');
            img.src = char.imageUrl;
            img.alt = char.name;
            img.classList.add('character-icon');
            img.dataset.id = char.id;
            img.addEventListener('click', () => addCharacterToParty(char));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '×';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteCharacter(char.id, char.name);
            });

            container.appendChild(img);
            if (!isNaN(parseInt(char.id))) {
                container.appendChild(deleteButton);
            }
            characterListDiv.appendChild(container);
        });
    }

    uploadButton.addEventListener('click', async () => {
        const file = imageUploader.files[0];
        if (!file) { uploadStatus.textContent = 'ファイルが選択されていません。'; return; }
        const formData = new FormData();
        formData.append('imageFile', file);
        try {
            uploadStatus.textContent = 'アップロード中...';
            const response = await fetch('/upload', { method: 'POST', body: formData });
            const result = await response.json();
            if (response.ok) {
                uploadStatus.textContent = 'アップロード成功！';
                hiddenImageUrl.value = result.filePath;
            } else { throw new Error(result.error); }
        } catch (error) {
            uploadStatus.textContent = `エラー: ${error.message}`;
        }
    });

    addForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const newCharacterData = {
            name: document.getElementById('char-name').value,
            element: document.getElementById('char-element').value,
            weapon: document.getElementById('char-weapon').value,
            rarity: document.getElementById('char-rarity').value,
            imageUrl: hiddenImageUrl.value
        };
        if (!newCharacterData.imageUrl) { alert('画像をアップロードしてください。'); return; }
        try {
            const response = await fetch('/api/characters', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCharacterData)
            });
            if (response.ok) {
                alert('キャラクターが追加されました！');
                addForm.reset();
                uploadStatus.textContent = '';
                hiddenImageUrl.value = '';
                await initializeApp();
            } else { throw new Error('キャラクターの追加に失敗しました。'); }
        } catch (error) {
            alert(error.message);
        }
    });

    function filterCharacters() {
        const searchText = searchBar.value.toLowerCase();
        const selectedElement = elementFilter.value;
        const selectedWeapon = weaponFilter.value;
        const filtered = allCharacters.filter(char => 
            (char.name.toLowerCase().includes(searchText)) &&
            (selectedElement === 'all' || char.element === selectedElement) &&
            (selectedWeapon === 'all' || char.weapon === selectedWeapon)
        );
        renderCharacters(filtered);
    }
    searchBar.addEventListener('input', filterCharacters);
    elementFilter.addEventListener('change', filterCharacters);
    weaponFilter.addEventListener('change', filterCharacters);

    clearPartyButton.addEventListener('click', () => {
        currentParty = [];
        repopulatePartySlots();
        saveParty();
    });

    function addCharacterToParty(char) {
        if (currentParty.length >= 4) {
            alert('パーティは最大4人です。');
            return;
        }
        if (currentParty.some(pChar => pChar.id === char.id)) {
            alert(`${char.name} はすでにパーティにいます。`);
            return;
        }
        currentParty.push({ ...char, selectedWeapon: '', selectedArtifacts: ['', ''] });
        repopulatePartySlots();
        saveParty();
    }

    function removeCharacterFromParty(charId) {
        currentParty = currentParty.filter(pChar => pChar.id !== charId);
        repopulatePartySlots();
        saveParty();
    }

    function repopulatePartySlots() {
        partySlots.forEach((slot, index) => {
            const characterDisplay = slot.querySelector('.character-display');
            const weaponSelect = slot.querySelector('.weapon-select');
            const artifactSetSelects = slot.querySelectorAll('.artifact-set-select');

            characterDisplay.innerHTML = '';
            weaponSelect.innerHTML = '<option value="">武器を選択</option>';
            artifactSetSelects[0].innerHTML = '<option value="">聖遺物セット1</option>';
            artifactSetSelects[1].innerHTML = '<option value="">聖遺物セット2</option>';

            const pChar = currentParty[index];
            if (pChar) {
                const img = document.createElement('img');
                img.src = pChar.imageUrl;
                img.alt = pChar.name;
                img.classList.add('party-character-icon');
                img.addEventListener('click', () => removeCharacterFromParty(pChar.id));
                characterDisplay.appendChild(img);

                populateWeaponSelect(weaponSelect, pChar.weapon);
                populateArtifactSetSelects(artifactSetSelects);

                weaponSelect.value = pChar.selectedWeapon || '';
                artifactSetSelects[0].value = pChar.selectedArtifacts[0] || '';
                artifactSetSelects[1].value = pChar.selectedArtifacts[1] || '';

                weaponSelect.addEventListener('change', () => updateCharacterEquipment(pChar.id, 'weapon', weaponSelect.value));
                artifactSetSelects[0].addEventListener('change', () => updateCharacterEquipment(pChar.id, 'artifact1', artifactSetSelects[0].value));
                artifactSetSelects[1].addEventListener('change', () => updateCharacterEquipment(pChar.id, 'artifact2', artifactSetSelects[1].value));
            }
        });
    }

    function populateWeaponSelect(selectElement, charWeaponType) {
        if (weapons[charWeaponType]) {
            weapons[charWeaponType].forEach(weapon => {
                const option = document.createElement('option');
                option.value = weapon;
                option.textContent = weapon;
                selectElement.appendChild(option);
            });
        }
    }

    function populateArtifactSetSelects(selectElements) {
        selectElements.forEach((selectElement, index) => {
            selectElement.innerHTML = `<option value="">聖遺物セット${index + 1}</option>`;
            artifactSets.forEach(set => {
                const option = document.createElement('option');
                option.value = set;
                option.textContent = set;
                selectElement.appendChild(option);
            });
        });
    }

    function updateCharacterEquipment(charId, type, value) {
        const charInParty = currentParty.find(pChar => pChar.id === charId);
        if (charInParty) {
            if (type === 'weapon') charInParty.selectedWeapon = value;
            else if (type === 'artifact1') charInParty.selectedArtifacts[0] = value;
            else if (type === 'artifact2') charInParty.selectedArtifacts[1] = value;
            saveParty();
        }
    }

    function saveParty() {
        localStorage.setItem('genshinParty', JSON.stringify(currentParty));
    }

    function loadParty() {
        const savedParty = localStorage.getItem('genshinParty');
        if (savedParty) {
            currentParty = JSON.parse(savedParty);
            repopulatePartySlots();
        }
    }

    initializeApp();
});

let addModal = `    <input class="modal-state" id="modal-1" type="checkbox">
<div class="modal">
    <label class="modal-bg" for="modal-1"></label>
    <div class="modal-body modal-form">
        <label class="btn-close" for="modal-1">X</label>
        <h4 class="modal-title">Add a Word</h4>
        <h5 class="modal-subtitle">Enter data into the required fields</h5>
        <div class="text-input">
            <form>
                Word:<br>
                <input type="text" name="word-add">
                Pronunciation:<br>
                <input type="text" name="pronunciation-add">
                Part of Speech:<br>
                <input type="text" name="part-of-speech-add">
                Definition:<br>
                <textarea name="definition-add">Definition</textarea>
            </form>
        </div>
        <div class="btn-container">
            <label id="add-confirm" class="paper-btn" for="modal-1">Add Word</label>
        </div>
    </div>
</div>`

// $('#content').html(addModal);
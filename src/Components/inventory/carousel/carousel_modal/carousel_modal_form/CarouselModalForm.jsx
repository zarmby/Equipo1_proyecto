import './CarouselModalForm.scss';

const ModalForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("jaja");
    }
    return(
        <div id="modal_form_container">
            <form id="modal_form" onSubmit={handleSubmit}>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ModalForm;
import "./Modal.css"

const Modal = ({children, isSalesModal}) => {
    return ( 
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: "4px solid",
                borderColor: isSalesModal ? "#fde127" : "#555",
                textAlign: "center"
            }}>
                {children}
            </div>
        </div>
     );
}
 
export default Modal;
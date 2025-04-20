import React from "react";
import { FORM_LABELS } from "../../utils/constants";

import "./FormMessage.css";

const FormMessage = ({ newMessage, setNewMessage, handleCreateMessage }) => {
 
    return (
        <div className="row justify-content-center">
        <div className="col-md-6">
        <form 
           className="form-magico"
            onSubmit={(e) =>{
            e.preventDefault();
            handleCreateMessage();
          }}
          
        >
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
                {FORM_LABELS.inputLabel}
            </label>
            
            <input type="text" 
              className="input-magico" 
              id="mensaje"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
          <button type="submit"
              className="magic-btn" >
                {FORM_LABELS.submit}
            </button>
        </form>
      </div>
      </div>
    );
};

export default FormMessage;
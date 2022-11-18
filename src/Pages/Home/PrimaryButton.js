import React from 'react';

const PrimaryButton = ({children}) => {
    return (
      <div>
        <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 ">
          {children}
        </button>
      </div>
    );
};

export default PrimaryButton;
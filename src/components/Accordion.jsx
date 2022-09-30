import React from "react";


const Accordion = () => {

    const [showContent, setShowContent] = React.useState(false)


  return (
    <div>
      <div className="acco d-flex  p-3 ">
        <div className="   "><p className="fw-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
        
        <button className="button "onClick={() => setShowContent(!showContent)} > {
            showContent ? <p className="minus p-2">-</p> : <p className="add p-2">+</p>
        }</button>

      </div>
      <div className={`${showContent ? 'd-block': 'd-none'}`} >

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iusto
        tenetur corporis culpa incidunt,<br /> iure autem, a expedita ipsum quae
        excepturi earum nihil laudantium itaque  blanditiis.<br /> At culpa libero
        fugit.
      </div>
    </div>
  );
};

export default Accordion;
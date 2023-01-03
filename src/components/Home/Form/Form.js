import React, { useState } from "react";
import "./Form.css"


const Form =(props)=> {
  const [form, setForm] = useState({
    value: "",
    date: new Date().toISOString().substring(0, 10),
    comment: ""
  })



  const onSubmit = (e) => {
    e.preventDefault();
    props.onChange(form);
    setForm({
      ...form,
      value: "",
      comment: " ",
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  
    return (
      <form onSubmit={onSubmit}>
        
          <input
            name="value"
            placeholder="Сума"
            type="number"
            value={form.value}
            onChange={onChange}
            className="block"
          />
        
          <input
            name="date"
            type="date"
            id="start"
            min="2022-01-01"
            max="2025-12-31"
            value={form.date}
            onChange={onChange}
            className="block"
          />
        
        <div className="block2">
          <button className="btn btn-primary block">Зберегти</button>
          <textarea className="block"
            name="comment"
            value={form.comment}
            onChange={onChange}
          />
        </div>
      </form>
    );
  
}

export default Form;
import React, { Component } from 'react';
import Joi from "joi-browser"
import Select from './select';
import Input from "../common/input"
import SelectMultiple from './selectMultiple';
import TextArea from './textArea';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema)

        return error ? error.details[0].message : null
    }

    handleChange = ({currentTarget: input}) => {
        
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)
        if(errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]

        const data = {...this.state.data}
        data[input.name] = input.value
        this.setState({data, errors})
    }

    validate = () => {
        const {error} = Joi.validate(this.state.data, this.schema, {abortEarly: false})

        if(!error) return null

        const errors = {}
        for(let item of error.details){
            errors[item.path[0]] = item.message
        }
        return errors
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate()
        console.log(errors)
        this.setState({errors: errors || {}})
        if(errors) return

        this.doSubmit()
    }

    renderButton(label) {
        return (
            <button className="btn btn-primary" onClick={this.handleSubmit}>{label}</button>
        )
    }

    

    renderSelect(name, label, options){
        const {data, errors} = this.state
        return <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            ></Select>
      }

      renderSelectMultiple(name, label, options){
        const {data, errors} = this.state
        return <SelectMultiple
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            ></SelectMultiple>
      }


    renderInput(name, label, type="text"){
        const { data, errors } = this.state;
        return(
            <Input type={type} name={name} value={data[name]} label={label} onChange={this.handleChange} error={errors[name]} />
        )
    }

    renderIsAdmin(name, label, value, type="text", hidden=true){
        const { data, errors } = this.state;
        return (
            <Input hidden={hidden} type={type} name={name} value={data[name]} label={label} onChange={this.handleChange} error={errors[name]} />
        )
    }

    renderTextArea(name, label, type="text"){
        const { data, errors } = this.state;
        return(
            <TextArea type={type} name={name} value={data[name]} label={label} onChange={this.handleChange} error={errors[name]} />
        )
    }

}
 
export default Form;
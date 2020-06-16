import React from 'react'

export default function Form(props) {

    const {
        values,
        onSubmit,
        onInputChange
    } = props

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a Worker</h2>
                <button>Add</button>
            </div>

            <div>
                <h3>Input Information Here</h3>
                <label>Worker Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                        maxLength='15'
                    />
                </label>

                <br></br>
                <br></br>

                <label>Email Address:&nbsp;
                    <input 
                        id='emailInput'
                        type='text'
                        name='email'
                        onChange={onInputChange}
                        value={values.email}
                    />
                </label>

                <br></br>
                <br></br>

                <label>Role/Occupation:&nbsp;
                    <select 
                        name='role'
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>--Select an Option--</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Student'>Student</option>
                    </select>    
                </label>

            </div>
        </form>
    )
}
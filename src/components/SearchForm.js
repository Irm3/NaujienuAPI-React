import React, {useState} from 'react'

const SearchForm = ({searchText}) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault()
        searchText(text)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={{width: 400}} className='input' type="text" placeholder='pvz: covid' onChange={(e) => setText(e.target.value)} />
                <button className='button is-info' type="submit">Ieškoti</button>
            </form>
        </div>
    )
}

export default SearchForm

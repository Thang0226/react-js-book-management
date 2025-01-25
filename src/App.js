import './App.css';
import {useState} from 'react';
import {Formik} from 'formik';

function App() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({});
    const [index, setIndex] = useState(-1);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleValidate = () => {
        let errors = {}

        if (!form.title || form.title.length < 1) {
            errors.title = 'Required';
        }

        if (!form.number || form.number.length < 1) {
            errors.number = 'Required';
        }

        return errors;
    }

    const handleSelect = (book, selectedIndex) => {
        setIndex(selectedIndex);
        setForm({title: book.title, number: book.number});
    }

    const handleDelete = (selectedIndex) => {
        let newBooks = [...books];
        newBooks.splice(selectedIndex, 1);
        setBooks(newBooks);
    }

    const handleSubmit = () => {
        if (index === -1) {     // submit new book
            setBooks([...books, form]);
        } else {                // update a book information
            let newBooks = books;
            newBooks[index] = form;
            setBooks(newBooks);
            setIndex(-1);
        }
        setForm({});
    }

    return (
        <div className="container">
            <h1>Library</h1>
            <Formik initialValues={form} validate={handleValidate} onSubmit={handleSubmit}>
                {({errors, handleSubmit}) => (
                    <>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="title" className={`${errors.title && "error"}`}>Tiêu đề</label><br/>
                            <input type="text" id="title" name="title"
                                   className={`custom-input ${errors.title && "custom-input-error"}`}
                                   value={form.title || ""} onChange={handleChange}/>
                            {errors.title && (<p className="error">{errors.title}</p>)}
                            <br/><br/>

                            <label htmlFor="number" className={`${errors.number && "error"}`}>Số lượng</label><br/>
                            <input type="number" id="number" name="number"
                                   className={`custom-input ${errors.number && "custom-input-error"}`}
                                   value={form.number || ""} onChange={handleChange}/>
                            {errors.number && (<p className="error">{errors.number}</p>)}
                            <br/><br/>

                            <button type="submit">Submit</button>
                        </form>
                        <table>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Number</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books.map((book, index) => (
                                <tr>
                                    <td>{book.title}</td>
                                    <td>{book.number}</td>
                                    <td>
                                        <button onClick={() => handleSelect(book, index)}>Edit</button>
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </>
                )}
            </Formik>
        </div>
    );
}

export default App;

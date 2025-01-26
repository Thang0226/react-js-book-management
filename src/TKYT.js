import {useState} from 'react';
import {Formik} from 'formik';

function TKYT() {
    const REGEX = {
        email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/
    }
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleCheckbox = (e) => {
        setForm({...form, [e.target.name]: e.target.checked});
    }

    const handleValidate = () => {
        let errors = {}

        if (!form.name || form.name.length < 1) {
            errors.name = 'Required';
        }

        if (!form.id || form.id.length < 1) {
            errors.id = 'Required';
        }

        if (!form.birthYear || form.birthYear.length < 1) {
            errors.birthYear = 'Required';
        } else if (parseInt(form.birthYear) <= 1900) {
            errors.birthYear = ' > 1900';
        }

        if (!form.nation || form.nation.length < 1) {
            errors.nation = 'Required';
        }

        if (!form.city || form.city.length < 1) {
            errors.city = 'Required';
        }

        if (!form.province || form.province.length < 1) {
            errors.province = 'Required';
        }

        if (!form.ward || form.ward.length < 1) {
            errors.ward = 'Required';
        }

        if (!form.address || form.address.length < 1) {
            errors.address = 'Required';
        }

        if (!form.phone || form.phone.length < 1) {
            errors.phone = 'Required';
        }

        if (!form.email || form.email.length < 1) {
            errors.email = 'Required';
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }


        return errors;
    }

    const handleSubmit = () => {
        alert("Khai bao thanh cong!");
    }

    return (
        <div className="container">
            <h1>To khai y te</h1>
            <Formik initialValues={form} validate={handleValidate} onSubmit={handleSubmit}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className={`${errors.name && "error"}`}>Ho ten</label><br/>
                        <input type="text" id="name" name="name"
                               className={`custom-input ${errors.name && "custom-input-error"}`}
                               value={form.name || ""} onChange={handleChange}/>
                        {errors.name && (<p className="error">{errors.name}</p>)}
                        <br/><br/>

                        <label htmlFor="id" className={`${errors.id && "error"}`}>So ho chieu / CCCD</label><br/>
                        <input type="text" id="id" name="id"
                               className={`custom-input ${errors.id && "custom-input-error"}`}
                               value={form.id || ""} onChange={handleChange}/>
                        {errors.id && (<p className="error">{errors.id}</p>)}
                        <br/><br/>

                        <label htmlFor="birthYear" className={`${errors.birthYear && "error"}`}>Nam sinh
                            (YYYY)</label><br/>
                        <input type="number" id="birthYear" name="birthYear"
                               className={`custom-input ${errors.birthYear && "custom-input-error"}`}
                               value={form.birthYear || ""} onChange={handleChange}/>
                        {errors.birthYear && (<p className="error">{errors.birthYear}</p>)}
                        <br/><br/>

                        <label htmlFor="gender">Gioi tinh:</label><br/>
                        <div className="inline radio">
                            <input type="radio" id="gender" name="gender" value="male" onChange={handleChange}/> Nam
                            <input type="radio" id="gender" name="gender" value="female" onChange={handleChange}/> Nu
                        </div>
                        <br/>

                        <label htmlFor="nation" className={`${errors.nation && "error"}`}>Quoc tich</label><br/>
                        <input type="text" id="nation" name="nation"
                               className={`custom-input ${errors.nation && "custom-input-error"}`}
                               value={form.nation || ""} onChange={handleChange}/>
                        {errors.nation && (<p className="error">{errors.nation}</p>)}
                        <br/><br/>

                        <label htmlFor="company">Cong ty lam viec</label><br/>
                        <input type="text" id="company" name="company"
                               className={`custom-input`}
                               value={form.company || ""} onChange={handleChange}/>
                        <br/><br/>

                        <label htmlFor="department">Bo phan lam viec</label><br/>
                        <input type="text" id="department" name="department"
                               className={`custom-input`}
                               value={form.department || ""} onChange={handleChange}/>
                        <br/><br/>

                        <label htmlFor="bhyt">Co the bao hiem y te: </label>
                        <input type="checkbox" id="bhyt" name="bhyt" onChange={handleCheckbox}/>
                        <br/>

                        <h3>Dia chi lien lac tai Viet Nam</h3>

                        <label htmlFor="city" className={`${errors.city && "error"}`}>Thanh pho</label><br/>
                        <input type="text" id="city" name="city"
                               className={`custom-input ${errors.city && "custom-input-error"}`}
                               value={form.city || ""} onChange={handleChange}/>
                        {errors.city && (<p className="error">{errors.city}</p>)}
                        <br/><br/>

                        <label htmlFor="province" className={`${errors.province && "error"}`}>Quan/huyen</label><br/>
                        <input type="text" id="province" name="province"
                               className={`custom-input ${errors.province && "custom-input-error"}`}
                               value={form.province || ""} onChange={handleChange}/>
                        {errors.province && (<p className="error">{errors.province}</p>)}
                        <br/><br/>

                        <label htmlFor="ward" className={`${errors.ward && "error"}`}>Phuong/xa</label><br/>
                        <input type="text" id="ward" name="ward"
                               className={`custom-input ${errors.ward && "custom-input-error"}`}
                               value={form.ward || ""} onChange={handleChange}/>
                        {errors.ward && (<p className="error">{errors.ward}</p>)}
                        <br/><br/>

                        <label htmlFor="address" className={`${errors.address && "error"}`}>
                            So nha, pho, to dan pho /thon /doi
                        </label><br/>
                        <input type="text" id="address" name="address"
                               className={`custom-input ${errors.address && "custom-input-error"}`}
                               value={form.address || ""} onChange={handleChange}/>
                        {errors.address && (<p className="error">{errors.address}</p>)}
                        <br/><br/>

                        <label htmlFor="phone" className={`${errors.phone && "error"}`}>Dien thoai</label><br/>
                        <input type="text" id="phone" name="phone"
                               className={`custom-input ${errors.phone && "custom-input-error"}`}
                               value={form.phone || ""} onChange={handleChange}/>
                        {errors.phone && (<p className="error">{errors.phone}</p>)}
                        <br/><br/>

                        <label htmlFor="email" className={`${errors.email && "error"}`}>Email</label><br/>
                        <input type="text" id="email" name="email"
                               className={`custom-input ${errors.email && "custom-input-error"}`}
                               value={form.email || ""} onChange={handleChange}/>
                        {errors.email && (<p className="error">{errors.email}</p>)}
                        <br/><br/>

                        <h3>Trong vong 14 ngay qua, Anh/Chi co den quoc gia/vung lanh tho nao (Co the di qua nhieu quoc
                            gia)</h3>
                        <input type="text" id="places" name="places"
                               className={`custom-input`}
                               value={form.places || ""} onChange={handleChange}/>
                        <br/><br/>

                        <h3>Trong vong 14 ngay qua, Anh/Chi co thay xuat hien trieu chung nao sau day khong?</h3>
                        <div className="inline">
                            <input type="checkbox" id="sot" name="sot" value="true" onChange={handleCheckbox}/> Sot
                        </div>
                        <div className="inline">
                            <input type="checkbox" id="ho" name="ho" value="true" onChange={handleCheckbox}/> Ho
                        </div>
                        <div className="inline">
                            <input type="checkbox" id="kho-tho" name="kho-tho" value="true"
                                   onChange={handleCheckbox}/> Kho tho
                        </div>
                        <div className="inline">
                            <input type="checkbox" id="viem-phoi" name="viem-phoi" value="true"
                                   onChange={handleCheckbox}/> Viem phoi
                        </div>
                        <div className="inline">
                            <input type="checkbox" id="dau-hong" name="dau-hong" value="true"
                                   onChange={handleCheckbox}/> Dau hong
                        </div>
                        <div className="inline">
                            <input type="checkbox" id="met-moi" name="met-moi" value="true"
                                   onChange={handleCheckbox}/> Met moi
                        </div>
                        <br/><br/>

                        <h3>Trong vong 14 ngay qua, Anh/Chi co tiep xuc voi?</h3>
                        <div className="inline">
                            <input type="checkbox" id="people1" name="people1" value="true"
                                   onChange={handleCheckbox}/> Nguoi mac benh hoac nghi ngo mac benh COVID-19
                        </div>
                        <div className="inline">
                            <input type="checkbox" id="people2" name="people2" value="true"
                                   onChange={handleCheckbox}/> Nguoi tu nuoc co benh COVID-19
                        </div>
                        <div className="inline">
                            <input type="checkbox" id="people3" name="people3" value="true"
                                   onChange={handleCheckbox}/> Nguoi co bieu hien sot/ho/kho tho/viem phoi
                        </div>
                            <br/><br/>

                            <button type="submit">Submit</button>
                    </form>
                    )}
            </Formik>
        </div>
    );
}

export default TKYT;

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validateInfos = Yup.object().shape({
    firstName: Yup.string().required("Ce champ est requis"),
    lastName: Yup.string().required("Ce champ est requis"),
    emailAddress: Yup.string().email('Email invalide').required('Ce champ est requis'),
    checkboxGen: Yup.boolean().oneOf([true], "Vous devez cocher toutes les cases"),
    checkboxSup: Yup.boolean().oneOf([true], "Vous devez cocher cette case"),
    message: Yup.string().required("Ce champ est requis"),
    checkboxContact: Yup.boolean().oneOf([true], "Vous devez cocher toutes les cases")
})

function Formulaire(){
    return(
        <Formik
            initialValues={{firstName: '', lastName: '', emailAddress: '',checkboxGen: false, checkboxSup: false, message: '', checkboxContact: false}}
            validationSchema={validateInfos}
            onSubmit={(val) => console.log(val)}
        >
            {({isSubmitting}) => (
                <Form id='formContact'>
                    <div className='title'>
                        <h1>Contact Us</h1>
                    </div>

                    <div className='namediv'>
                        <article className='name-input'>
                            <article className='name-style'>
                                <label>First Name <span>*</span></label>
                                <Field type="text" name="firstName" className="border-style"/>
                            </article>
                            <article className='name-style'>
                                <label>Last Name <span>*</span></label>
                                <Field type="text" name="lastName" className="border-style" />
                            </article>
                        </article>
                        <article className='error-art'>
                            <ErrorMessage name='firstName' component='div' className='error' />
                            <ErrorMessage name='lastName' component='div' className='error' />
                        </article>
                    </div>

                    <div className='maildiv'>
                        <label>Email Address <span>*</span></label>
                        <Field type="email" name="emailAddress" className="border-style" />
                        <ErrorMessage name="emailAddress" component="div" className='error' />
                    </div>

                    <div className='querydiv'>
                        <article className='query-title'>
                            <label>Query Type <span>*</span></label>
                        </article>
                        <article className='query-check'>
                            <article className='border-check'>
                                <Field type="checkbox" name="checkboxGen" id="check-style"/>
                                <label htmlFor="generalEnq">General Enquiry</label>
                            </article>
                            <article className='border-check'>
                                <Field type="checkbox" name="checkboxSup" id="check-style" />
                                <label htmlFor="support">Support Request</label>
                            </article>
                        </article>
                        <article className='error-art'>
                            <ErrorMessage name="checkboxGen" component="div" className='error'/>
                            <ErrorMessage name="checkboxSup" component="div" className='error'/>
                        </article>
                    </div>

                    <div className='msgdiv'>
                        <label>Message <span>*</span></label>
                        <Field type="message" name="message" className="border-style_msg"/>
                        <ErrorMessage name='message' component='div' className='error' />
                    </div>

                    <div className='checkdiv'>
                        <Field type="checkbox" name="checkboxContact" id="check-style"/>
                        <label htmlFor="contact">I consent to being contacted by the team <span>*</span></label>
                    </div>
                        <ErrorMessage name="checkboxContact" component="div" className='error'/>
                        
                    <div className='btndiv'>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default Formulaire
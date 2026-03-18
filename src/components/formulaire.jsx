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
                        <article className='name-art'>
                            <label>First Name <span>*</span></label>
                            <Field type="text" name="firstName"/>
                            <ErrorMessage name='firstName' component='div' className='error' />
                            <label>Last Name <span>*</span></label>
                            <Field type="text" name="lastName"/>
                            <ErrorMessage name='lastName' component='div' className='error' />
                        </article>
                    </div>
                    <div className='maildiv'>
                        <label>Email Address <span>*</span></label>
                        <Field type="email" name="emailAddress" />
                        <ErrorMessage name="emailAddress" component="div" className='error' />
                    </div>
                    <div className='querydiv'>
                        <article className='query-title'>
                            <label>Query Type <span>*</span></label>
                        </article>
                        <article className='query-check'>
                            <article className='border-check'>
                                <Field type="checkbox" name="checkboxGen"/>
                                <label htmlFor="generalEnq">General Enquiry</label>
                                <ErrorMessage name="checkboxGen" component="div" className='error'/>
                            </article>
                            <article className='border-check'>
                                <Field type="checkbox" name="checkboxSup" />
                                <label htmlFor="support">Support Request</label>
                                <ErrorMessage name="checkboxSup" component="div" className='error'/>
                            </article>
                        </article>
                    </div>
                    <div className='msgdiv'>
                        <label>Message <span>*</span></label>
                        <Field type="message" name="message" />
                    </div>
                    <div className='checkdiv'>
                        <Field type="checkbox" name="checkboxContact" />
                        <label htmlFor="contact">I consent to being contacted by the team <span>*</span></label>
                        <ErrorMessage name="checkboxContact" component="div" className='error'/>
                    </div>
                    <div className='btndiv'>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default Formulaire
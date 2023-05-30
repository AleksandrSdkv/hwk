import './App.css';
import { Formik, Form, useField, Field } from 'formik';
import { SchemaForSearch } from './validate/formValidate';
function App() {

  const CheckBox = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'checkbox' });
    return (
      <label className="searchform__toggle">
        <input className="searchform__toggle-checkbox" type="checkbox"{...field} {...props} />
        {children}
      </label>
    );
  };
  const RememberMe = ({ children, ...props }) => {
    const [field] = useField({ ...props, type: 'checkbox' });
    return (
      <label className="searchform__toggle_remember">
        <input className="searchform__toggle-checkbox" type="checkbox"{...field} {...props} />
        {children}
      </label>
    );
  };
  const FormName = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}><p className='FormIdentify__label-text_name'>{label}</p></label>
        <input className='FormIdentify__input' {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="FormIdentify__input__error">{meta.error}</div>
        ) : null}
      </>
    );

  };
  const FormPassword = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}><p className='FormIdentify__label-text'>{label}</p></label>
        <input className='FormIdentify__input' {...field} {...props} />

        {meta.touched && meta.error ? (
          <div className="FormIdentify__input__error">{meta.error}</div>
        ) : null}
      </>
    );

  };
  const FormText = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}><p className='FormIdentify__label-text'>{label}</p></label>
        <input className='FormIdentify__input_last' {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="FormIdentify__input__error">{meta.error}</div>
        ) : null}
      </>
    );

  };
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className='form_select-group'>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const FormikRadioGroup = () => {
    return (
      <div role="group" className='form__radio-group' label="my-radio-group" >
        <label className="form__radio-label">
          <Field type="radio" name="picked" value="One" />
          Radio selection 1
        </label>
        <label className="form__radio-label">
          <Field type="radio" name="picked" value="Two" />
          Radio selection 2
        </label>
        <label className="form__radio-label">
          <Field type="radio" name="picked" value="Three" />
          Radio selection 3
        </label>
      </div >
    );
  };

  return (

    <Formik
      initialValues={{
        username: '',
        password: '',
        inputText: '',
        remember: false,
        checkBox: false,
        picked: '',
        dropdownTitle: '',
      }}

      validationSchema={SchemaForSearch}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }
      }
    >
      {props => (
        <Form className='FormIdentify__form' >
          <div className='Form'>

            <FormName
              label="Username"
              name="username"
              type="text"
              placeholder="Enter username"
              className='FormIdentify__input'
              {...props.getFieldProps('username')}
            />
            <FormPassword
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              className='FormIdentify__input'
              {...props.getFieldProps('password')}
            />
            <FormText
              label="Input Text Label"
              name="inputText"
              type="text"
              placeholder="Enter text"
              className='FormIdentify__input'
              {...props.getFieldProps('inputText')}
            />


            <RememberMe name="remember"  >
              <div className="searchform__toggle-switch"></div>
              <span className="searchform__toggle-label">Remember me</span>
            </RememberMe>

            <CheckBox name="checkBox"  >
              <div className="searchform__toggle-switch"></div>
              <span className="searchform__toggle-label">Off</span>
            </CheckBox>

            <FormikRadioGroup name="RadioOne">
            </FormikRadioGroup>

            <MySelect label="Dropdown Title" name="dropdownTitle">
              <option value="">Dropdown option</option>
              <option value="designer">Dropdown option 1</option>
              <option value="development">Dropdown option 2</option>
            </MySelect>

            <div className='form__button-group'>
              <button className='form__button_clear' type='button'>Cancel</button>
              <button type='submit' disabled={!props.isValid} className={!(props.dirty && props.isValid) ? `${'FormIdentify__button_inactive'}` : `${'FormIdentify__button'}`}>Next</button>
            </div>

          </div>
        </Form>
      )}
    </Formik>
  );
}
export default App;

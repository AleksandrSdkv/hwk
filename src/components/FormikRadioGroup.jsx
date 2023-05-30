import { Field } from 'formik';
const FormikRadioGroup = () => {
    return (
        <div role="group" className='form__radio-group' label="my-radio-group" >
            <label className="form__radio-label">
                <Field className="ll" type="radio" name="picked" value="One" />
                Radio selection 1
            </label>
            <label className="form__radio-label">
                <Field className="ll" type="radio" name="picked" value="Two" />
                Radio selection 2
            </label>
            <label className="form__radio-label">
                <Field className="ll" type="radio" name="picked" value="Three" />
                Radio selection 3
            </label>
        </div >
    );
};
export default FormikRadioGroup
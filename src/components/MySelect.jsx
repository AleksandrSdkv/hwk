import { useField } from 'formik';
const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='form_select-group'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select className='form_select-selector' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};
export default MySelect
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if(!values[key] && (key !== 'startDate')) {
      errors[key] = `Field ${key} is required!`
    }
  });

    return errors;
}

const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>

          <Field  type="text" 
                  name="title" 
                  label="Title"
                  component={PortInput}/> 

          <Field  type="text" 
                  name="technologies" 
                  label="Technologies"
                  component={PortInput}/>

          <Field  type="textarea" 
                  name="description" 
                  label="Description"
                  component={PortInput}/>

          <Field  type="text" 
                  name="imgurl" 
                  label="Image URL"
                  component={PortInput}/>

          <Field  name="startDate" 
                  label="Date "
                  initialDate={initialValues.startDate}
                  component={PortDate}/>

          { error &&
            <Alert color="danger">
              {error}
            </Alert>
          }

          {/* <Field  name="endDate" 
                  label="End Date"
                  component={PortDate}/> */}

          <Button type="submit" disabled={isSubmitting} size="lg" color="success">
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;




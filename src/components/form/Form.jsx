import { Form, Input, TextArea, Button } from 'semantic-ui-react';

const genderOptions = [
   { key: 'm', text: 'Male', value: 'male' },
   { key: 'f', text: 'Female', value: 'female' },
   { key: 'o', text: 'Other', value: 'other' },
];

function FormExampleFieldControlId() {
   return (
      <Form>
         <Form.Group widths="equal">
            <Form.Field id="form-input-control-first-name" control={Input} label="First name" placeholder="First name" />
            <Form.Field id="form-input-control-last-name" control={Input} label="Last name" placeholder="Last name" />
         </Form.Group>
         <Form.Field id="form-textarea-control-opinion" control={TextArea} label="Message" placeholder="Message" />
         <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
            error={{
               content: 'Please enter a valid email address',
               pointing: 'below',
            }}
         />
         <Form.Field id="form-button-control-public" control={Button} content="Confirm" />
      </Form>
   );
}

export default FormExampleFieldControlId;

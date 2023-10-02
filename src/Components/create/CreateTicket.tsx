import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const CreateTicket = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" multiline={true} label="Short description" fullWidth />
            <TextInput source="status" />
            <DateInput label="Publication date" source="created_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);
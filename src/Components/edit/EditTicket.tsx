import { useState } from "react";
import {
  DateInput,
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useGetList,
  useRecordContext,
} from "react-admin";

export const TicketEdit = () => {
    const record = useRecordContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data, isLoading } = useGetList("categories");

  const validateDescription = (value: string) => {
    if (value && value.length > 500) {
      return "Descripción debe de ser máximo 500 caracteres";
    }
    return undefined;
  };
  const validateClosing = (value: string) => {
    if (value && value.length > 250) {
      4;
      return "Comentario de cierre debe de ser máximo 250 caracteres";
    }
    return undefined;
  };

  const subcategories: {
    index: number;
    name: string;
    parentCategoryId: string;
  }[] = [];
  if (data) {
    data.forEach(
      (category: { id: string; name: string; subcategories: string[] }) => {
        category?.subcategories.forEach(
          (subcategory: string, index: number) => {
            subcategories.push({
              parentCategoryId: category.id,
              index: index,
              name: subcategory,
            });
          }
        );
      }
    );
  }
  console.log(record)

  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" validate={[required()]} label="Título" />
        <SelectInput
          source="categoryId"
          label="Categoría"
          choices={data}
          optionText="name"
          optionValue="id"
          validate={[required()]}
          isLoading={isLoading}
          onChange={(e) => setSelectedCategory(e.target.value)}
        //   onLoad={(e) => setSelectedCategory(e.target.value)}
        />
        <SelectInput
          source="subcategoryIndex"
          label="Subcategoria"
          choices={subcategories.map((subcategory) => {
            if (subcategory.parentCategoryId === selectedCategory) {
              return subcategory;
            }
            return null;
          })}
          optionText="name"
          optionValue="index"
          validate={[required()]}
          isLoading={isLoading}
        />
        <SelectInput
          validate={[required()]}
          source="priority"
          label="Prioridad"
          choices={[
            { id: 0, name: "Baja" },
            { id: 1, name: "Media" },
            { id: 2, name: "Alta" },
          ]}
        />
        <SelectInput
          validate={[required()]}
          source="status"
          label="Estatus"
          choices={[
            { id: 0, name: "Pendiente" },
            { id: 1, name: "En progreso" },
            { id: 2, name: "Cerrado" },
          ]}
        />
        <TextInput source="intermediaries" />
        <TextInput
          source="description"
          multiline={true}
          label="Descripción"
          sx={{ width: "50%" }}
          validate={validateDescription}
        />
        <TextInput
          source="closingComment"
          multiline={true}
          label="Comentario de cierre"
          validate={validateClosing}
          sx={{ width: "50%" }}
        />
        <DateInput source="createdAt" disabled />
        <DateInput source="closedAt" disabled />
      </SimpleForm>
    </Edit>
  );
};

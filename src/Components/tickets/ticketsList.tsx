import {
  Datagrid,
  DateField,
  List,
  RichTextField,
  SimpleShowLayout,
  TextField,
  useGetList,
  useRecordContext,
  EditButton,
  ShowButton,
  Labeled,
} from "react-admin";

import Box from "@mui/material/Box";

interface CategoryData {
  id: string;
  name: string;
  subcategories: string[];
}

interface TicketRecord {
  title: string;
  categoryId: string;
  subcategoryIndex: number;
  priority: number;
  intermediaries: string;
  description: string;
  status: number;
  createdAt: string;
  id: number;
  closedAt: string;
}

export const TicketList = () => {
  const StatusReturner = () => {
    const record = useRecordContext<TicketRecord>();
    switch (record.status) {
      case 0:
        return record ? <span>Abierto</span> : null;
      case 1:
        return record ? <span>En proceso</span> : null;
      case 2:
        return record ? <span>Cerrado</span> : null;
      default:
        return <span>Abierto</span>;
    }
  };

  StatusReturner.defaultProps = {
    label: "Estatus",
  };

  const PriorityReturner = () => {
    const record = useRecordContext<TicketRecord>();
    switch (record.priority) {
      case 0:
        return record ? <span>Baja</span> : null;
      case 1:
        return record ? <span>Media</span> : null;
      case 2:
        return record ? <span>Alta</span> : null;
      default:
        return <span>Baja</span>;
    }
  };

  PriorityReturner.defaultProps = {
    label: "Prioridad",
  };

  const CategoryReturner = () => {
    const record = useRecordContext<TicketRecord>();
    const { data: CatData, isLoading } = useGetList("categories");
    if (isLoading) return <span>Cargando...</span>;
    const categories = CatData as CategoryData[];
    const category = categories.find((category) => {
      return category.id === record.categoryId;
    });
    return <span>{category?.name}</span>;
  };

  CategoryReturner.defaultProps = {
    label: "Categoria",
  };

  const SubCategoryReturner = () => {
    const record = useRecordContext<TicketRecord>();
    const { data: CatData, isLoading } = useGetList("categories");
    if (isLoading) return <span>Cargando...</span>;
    const categories = CatData as CategoryData[];
    const category = categories.find((category) => {
      return category.id === record.categoryId;
    });
    return <span>{category?.subcategories[record.subcategoryIndex]}</span>;
  };

  SubCategoryReturner.defaultProps = {
    label: "Subcategoria",
  };

  const DescShow = () => (
    <SimpleShowLayout>
      <RichTextField source="description" label="Descripción" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Labeled label={false}>
          <ShowButton label="Ver Ticket" />
        </Labeled>
        <Labeled label={false}>
          <EditButton label="Editar Ticket" />
        </Labeled>
      </Box>
    </SimpleShowLayout>
  );

  return (
    <List>
      <Datagrid
        rowClick="expand"
        sx={{
          "& .MuiTableCell-head": {
            fontWeight: "bold",
          },
          "& .column-description": {
            overflow: "hidden",
            whiteSpace: "nowrap",
            maxWidth: "200px",
            textOverflow: "ellipsis",
          },
        }}
        expand={<DescShow />}
        expandSingle
      >
        <TextField source="id" />
        <TextField source="title" label="Título" />
        <TextField
          source="description"
          label="Descripción"
          sx={{ textOverflow: "ellipsis" }}
        />
        <CategoryReturner />
        <SubCategoryReturner />
        <StatusReturner />
        <PriorityReturner />
        <DateField source="createdAt" label="Fecha de creación" />
        <TextField source="intermediaries" label="Intermediarios" />
        <TextField source="closedAt" label="Fecha de cierre" />
        <TextField source="closingComment" label="Comentario de cierre" />
      </Datagrid>
    </List>
  );
};

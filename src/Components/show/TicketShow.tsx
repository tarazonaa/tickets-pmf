import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  useRecordContext,
  useGetList,
  TabbedShowLayout,
} from "react-admin";

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

export const TicketShow = () => {
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
    label: "Categoría",
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
    label: "Subcategoría",
  };

  return (
    <Show>
      <SimpleShowLayout sx={{
        '& .MuiTypography-root':{
          fontSize: '15px',
        },
        "& .MuiTypography-body1 span": {
          fontSize: "16px",
          fontWeight: "bold",
        },
      }}>
        <TextField source="id" />
        <TextField source="title" label="Título" />
        <RichTextField source="description" label="Descripción" />
        <CategoryReturner />
        <SubCategoryReturner />
        <StatusReturner />
        <PriorityReturner />
        <DateField source="createdAt" label="Fecha de creacion" />
        <TextField source="intermediaries" label="Intermediarios" />
        <TextField source="closedAt" label="Fecha de cierre" />
        <TextField source="closingComment" label="Comentario de cierre" />
      </SimpleShowLayout>
    </Show>
  );
};

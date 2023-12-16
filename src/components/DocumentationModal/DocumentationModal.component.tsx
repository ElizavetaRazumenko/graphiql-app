import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DocumentationModalProps from './types/types';
import { CloseModalButton, ModalContainer, ModalList } from './styled';

const DocumentationModal = ({
  isModalOpen,
  setIsModalOpen,
}: DocumentationModalProps) => {
  return (
    <ModalContainer opened={isModalOpen.toString()}>
      <CloseModalButton onClick={() => setIsModalOpen(!isModalOpen)}>
        <CloseRoundedIcon
          sx={{
            color: '#000',
          }}
        />
      </CloseModalButton>
      <ModalList>
        A GraphQL schema provides a root type for each kind of operation. Root
        Types query: Root All Schema Types String Int FilmsConnection PageInfo
        Boolean FilmsEdge Film Node ID FilmSpeciesConnection FilmSpeciesEdge
        Species Float Planet PlanetResidentsConnection PlanetResidentsEdge
        Person PersonFilmsConnection PersonFilmsEdge PersonStarshipsConnection
        PersonStarshipsEdge Starship StarshipPilotsConnection StarshipPilotsEdge
        StarshipFilmsConnection StarshipFilmsEdge PersonVehiclesConnection
        PersonVehiclesEdge Vehicle
      </ModalList>
    </ModalContainer>
  );
};

export default DocumentationModal;

import { CloseModalButton, ModalContainer, ModalList } from './styled';

type DocumentationModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DocumentationModal = ({
  isModalOpen,
  setIsModalOpen,
}: DocumentationModalProps) => {
  return (
    <ModalContainer opened={isModalOpen.toString()}>
      <CloseModalButton
        onClick={() => setIsModalOpen(!isModalOpen)}
      ></CloseModalButton>
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

import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { Toaster, toast } from "react-hot-toast";
import Loader from "./components/Loader";
import LoadMore from "./components/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage";
import ImageModal from "./components/ImageModal";

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };
   const closeModal = () => {
     setIsModalOpen(false);
     setSelectedImage(null);
   };
  const fetchPhotos = async (term, pageNum) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${term}&page=${pageNum}&per_page=9&client_id=DWAcyp6n8j4-h3eYJRuQQK8c65lOlqVrYrp1cte21G8`
      );
      const data = await response.json();
      if (data.results.length === 0) {
        if (pageNum === 1) {
          toast.error("Sonuç bulunamadı. Lütfen başka bir kelime deneyin.");
          setResults([]);
        }
        return;
      }
      if (pageNum === 1) {
        setResults(data.results); // Yeni arama, önceki sonuçları sil
      } else {
        setResults((prev) => [...prev, ...data.results]); // Sayfa arttırma, sonuçları ekle
      }
      setHasError(false);
    } catch (error) {
      toast.error("Görseller alınırken hata oluştu");
      setHasError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (term) => {
    if (!term.trim()) {
      toast.error("Lütfen bir kelime girin");
      return;
    }
    setSearchTerm(term);
    setPage(1);
    fetchPhotos(term, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPhotos(searchTerm, nextPage);
  };

  return (
    <div className="app-container">
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {isLoading && <Loader loading={isLoading} />}
      {hasError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery photo={results} onImageClick={handleImageClick} />
      )}
      {results.length > 0 && !isLoading && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;

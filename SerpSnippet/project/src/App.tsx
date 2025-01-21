import React, { useState, useEffect } from 'react';
import { AlertTriangle, Search, Sparkles } from 'lucide-react';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('exemple.fr');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  useEffect(() => {
    // Validate title length
    if (title.length === 0) {
      setTitleError('Le titre est requis');
    } else if (title.length < 50) {
      setTitleError('Le titre est trop court (minimum 50 caractères)');
    } else if (title.length > 60) {
      setTitleError('Le titre est trop long (maximum 60 caractères)');
    } else {
      setTitleError('');
    }
  }, [title]);

  useEffect(() => {
    // Validate description length
    if (description.length === 0) {
      setDescriptionError('La méta description est requise');
    } else if (description.length < 150) {
      setDescriptionError('La description est trop courte (minimum 150 caractères)');
    } else if (description.length > 160) {
      setDescriptionError('La description est trop longue (maximum 160 caractères)');
    } else {
      setDescriptionError('');
    }
  }, [description]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header with branding */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Search className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              SerpSnippet
            </h1>
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-sm text-gray-600">by AB</p>
        </div>

        <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titre de la page ({title.length}/60)
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                style={{ borderWidth: 1, padding: '0.5rem' }}
              />
              {titleError && (
                <div className="mt-1 flex items-center text-sm text-amber-600">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {titleError}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                URL affichée
              </label>
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                style={{ borderWidth: 1, padding: '0.5rem' }}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Méta description ({description.length}/160)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                style={{ borderWidth: 1, padding: '0.5rem' }}
              />
              {descriptionError && (
                <div className="mt-1 flex items-center text-sm text-amber-600">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {descriptionError}
                </div>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-600" />
              Aperçu
            </h2>
            <div className="border p-4 rounded-lg bg-gray-50">
              <div className="text-xl text-blue-700 hover:underline cursor-pointer">
                {title || 'Titre de votre page'}
              </div>
              <div className="text-sm text-green-700">
                {url}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {description || 'La méta description apparaîtra ici...'}
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <h3 className="text-sm font-medium text-blue-800 mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Conseils SEO
            </h3>
            <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
              <li>Le titre doit être entre 50 et 60 caractères</li>
              <li>La méta description doit être entre 150 et 160 caractères</li>
              <li>Utilisez des mots-clés pertinents dans le titre et la description</li>
              <li>Évitez la duplication de contenu</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          SerpSnippet © {new Date().getFullYear()} AB - Tous droits réservés
        </div>
      </div>
    </div>
  );
}

export default App;
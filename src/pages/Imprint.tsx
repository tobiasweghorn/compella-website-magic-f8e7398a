
import React from 'react';
import Navbar from '@/components/Navbar';

const Imprint = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-2xl mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6 text-compella-gray">Impressum</h1>
          <div className="prose">
            <p className="mb-6">Verantwortlich für alle Inhalte ist:</p>
            <p className="mb-6">
              metaFox GmbH<br />
              Carl-Spitzweg-Str. 61<br />
              90768 Fürth
            </p>
            <p className="mb-6">
              Vertreten durch: Maximilian Friedle, Tobias Weghorn<br />
              Kontakt: tobias.weghorn@compella.org
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;

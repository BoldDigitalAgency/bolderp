import React from 'react';

function ProductCard() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Produits</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Produit ID</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Nom</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Prix</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Nombre d'orders</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Quantité disponible total</div>      
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Quantité vendu total</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">6545</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Pomme</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">$1,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    <div className="text-slate-800">5</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">50 kg</div>
                </td>
                <td className="p-2">
                  <div className="text-center">30kg</div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;

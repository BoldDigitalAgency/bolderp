import React from 'react';

function OrderCard() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Orders</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Order ID</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Type d'order</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Client</div>
                </th>
                <th className="p-2">
                    <div className="font-semibold text-left">Product</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Quantité</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Prix total</div>      
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Container</div>      
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Avance</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">564516</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Payment</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Mohamed</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="items-center">Pomme</div>
                </td>
                <td className="p-2">
                  <div className="text-center">50 kg</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">$3,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10</div>
                </td>
                <td className="p-2">
                  <div className="text-center">$ 500</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Non payée</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">654855</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Achat</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Aziz</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="items-center">Fraise</div>
                </td>
                <td className="p-2">
                  <div className="text-center">500 kg</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$10,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10</div>
                </td>
                <td className="p-2">
                  <div className="text-center">$ 500</div>
                </td>
                <td className="p-2">
                  <div className="text-center">payée</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">564516</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Payment</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Ali</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="items-center">Atte</div>
                </td>
                <td className="p-2">
                  <div className="text-center">70 kg</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$15,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10</div>
                </td>
                <td className="p-2">
                  <div className="text-center">$ 500</div>
                </td>
                <td className="p-2">
                  <div className="text-center">payée</div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default OrderCard;

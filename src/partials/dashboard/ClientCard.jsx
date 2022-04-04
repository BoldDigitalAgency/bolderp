import React from 'react';

function ClientCard() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Clients</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Nom</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2">
                    <div className="font-semibold text-left">Telephone</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Matricule fiscale</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Address</div>      
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Balance</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Mohamed</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">mohamed@gmail.com</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">25544964</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">m/f4684654</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Tunis</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">$3,877</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Aziz</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">aziz@gmail.com</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">24452652</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">m/f6475245</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Tunis</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$4,877</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Ali</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">ali@gmail.com</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">50542249</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">m/f3244650</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Tunis</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$5,877</div>
                </td>
              </tr>
              {/* Row */}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default ClientCard;

import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Crédit</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Nome</div>
                </th>
                {/* <th className="p-2">
                </th>
                <th className="p-2">
                </th> */}
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Montant</div>
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
                  <div className="text-center">50</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">$3,877</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                <div className="flex items-center">
                    <div className="text-slate-800">Aziz</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">249</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$40,426</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                <div className="flex items-center">
                    <div className="text-slate-800">Aziz</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">249</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$40,426</div>
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

export default DashboardCard07;

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF0Dk-JRRlekw/profile-displayphoto-shrink_400_400/0/1592339277637?e=1639008000&v=beta&t=L8qN_dRupVC8HfzB-MLMZtRYEhalK_dYByj8-NtW6-o",
  },
  {
    name: "John Smith",
    title: "Dynamic Research Manager",
    department: "Marketing",
    role: "Admin",
    email: "jsmith@gmail.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF0Dk-JRRlekw/profile-displayphoto-shrink_400_400/0/1592339277637?e=1639008000&v=beta&t=L8qN_dRupVC8HfzB-MLMZtRYEhalK_dYByj8-NtW6-o",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF0Dk-JRRlekw/profile-displayphoto-shrink_400_400/0/1592339277637?e=1639008000&v=beta&t=L8qN_dRupVC8HfzB-MLMZtRYEhalK_dYByj8-NtW6-o",
  },
  {
    name: "John Smith",
    title: "Dynamic Research Manager",
    department: "Marketing",
    role: "Admin",
    email: "jsmith@gmail.com",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF0Dk-JRRlekw/profile-displayphoto-shrink_400_400/0/1592339277637?e=1639008000&v=beta&t=L8qN_dRupVC8HfzB-MLMZtRYEhalK_dYByj8-NtW6-o",
  },
];

export function UsersList() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <h1 className="w-full text-center text-2xl font-bold text-gray-50 mb-6">
            Listagem de usuários{" "}
            <span className="text-green-300">Disponíveis</span>
          </h1>

          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Título
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Cargo
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Disponível
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="px-3 py-2 rounded-sm text-indigo-600 hover:text-indigo-900 hover:bg-gray-50"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

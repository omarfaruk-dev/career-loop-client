


const ApplicationRow = ({ application, handleDelete }) => {
    const { _id, title, company, company_logo, jobType, category, status } = application;

    //delete application
    

    return (

        <tr className='hover:bg-secondary/5'>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                title={company} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {jobType}
                <br />
                <span className="badge badge-ghost badge-sm">{category}</span>
            </td>
            <td>{status}</td>
            <th>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-warning btn-outline btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ApplicationRow;
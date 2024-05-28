import React from "react";

const HealthTable: React.FC<{ healthContent: string[], HealthData: any[] }> = ({ healthContent, HealthData }) => {


    const tHead = healthContent.map((item: string) => {

        return (

            <th scope="col" className="uppercase" >
                {item}
            </th>


        )

    })

    const tBody = HealthData.map((item: any) => {

        return (

            <tr key={item.id} >
                <td>{item['id']}</td>
                <td>{item.name}</td>
                <td>{item.bp}</td>
                <td>{item.sugar}</td>
                <td>{item.Hr}</td>
            </tr>


        )

    })



    return (
        <>
            <table className=" bg-slate-400 w-full text-left  divide-y divide-black justify-between ">
                <thead>
                    <tr >
                        {tHead}
                    </tr>
                </thead>
                <tbody className=" bg-slate-200  ">

                    {tBody}


                </tbody>
            </table>
        </>
    )

}
export default HealthTable;
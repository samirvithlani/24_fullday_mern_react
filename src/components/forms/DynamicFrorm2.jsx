import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const DynamicFrorm2 = () => {
    const [medicins, setmedicins] = useState([])

  const { register, handleSubmit, control } = useForm({
    defaultValues: { medicin: [{ name: "", dosage: 0, frequency: 0 }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicin",
  });
  const submitHandler = (data) => {
    console.log("data...", data.medicin);
    setmedicins(data.medicin)
  };
  return (
    <div>
      <h1>DYNAMIC FORM DEMO 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        {fields.map((filed, index) => {
          return (
            <div>
              <>
                <label>NAME</label>
                <input
                  type="text"
                  {...register(`medicin.${index}.name`)}
                ></input>
              </>
              <>
                <label>DOSAGE</label>
                <input
                  type="text"
                  {...register(`medicin.${index}.dosage`)}
                ></input>
              </>
              <>
                <label>frequency</label>
                <input
                  type="text"
                  {...register(`medicin.${index}.frequency`)}
                ></input>
              </>
            </div>
          );
        })}
        <div>
          <input type="submit"></input>
        </div>
      </form>

      <>
        <button
          onClick={() => {
            append([{ name: "", dosage: 0, frequency: 0 }]);
          }}
        >
          add more
        </button>
      </>

            <div>output</div>



    </div>
  );
};

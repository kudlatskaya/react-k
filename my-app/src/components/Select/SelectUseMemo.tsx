import {useMemo, useState} from "react";
import Select from "./Select";

export type locationType = {
    city: string,
    country: string,
    population: number,
}

type SelectUseMemoPropsType = {
    cities: locationType[],
}

const SelectUseMemo = (props: SelectUseMemoPropsType) => {
    const {cities} = props;
    let filteredCities;

    const [citiesM, setCitiesM] = useState<locationType[]>(cities);
    const [citiesBelarus, setCitiesBelarus] = useState<locationType[]>(cities);
    const [citiesPopulation, setCitiesPopulation] = useState<locationType[]>(cities);


    // filteredCities = useMemo(() => {
    //     let _cities = cities.filter(c => c.city[0] === 'M')
    //     return [..._cities.map(c => c.city)]
    // }, [citiesM])
    //
    // filteredCities || setCitiesM(filteredCities)
    //
    // filteredCities = useMemo(() => {
    //     let _cities = cities.filter(c => c.country === 'Belarus')
    //     return [..._cities.map(c => c.city)]
    // }, [citiesBelarus])
    //
    // filteredCities || setCitiesBelarus(filteredCities)
    //
    // filteredCities = useMemo(() => {
    //     let _cities = cities.filter(c => c.population > 1000)
    //     return [..._cities.map(c => c.city)]
    // }, [citiesPopulation])
    //
    // filteredCities || setCitiesPopulation(filteredCities)

    return (
        <div style={{display: "flex"}}>
            <Select items={[...cities.map(c => c.city)]} value={citiesM[0].city} />
            <Select items={[...cities.map(c => c.city)]} value={citiesBelarus[0].city} />
            <Select items={[...cities.map(c => c.city)]} value={citiesPopulation[0].city} />
        </div>
    );
};

export default SelectUseMemo;
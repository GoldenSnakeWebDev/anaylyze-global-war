import React, { useEffect, useState } from "react";
import { StyledLegendModal } from "./LegendModal.styled";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const LegendModal = (props) => {
  const {optionNames, situationNames, get_CountryColor, get_OptionNames} = props;
  const [selectedSituation, setSelectedSituation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

    const handleSituation = (event, value) => {
        if (value !== undefined) {
            get_OptionNames(value.label);
            setSelectedSituation(value.label);
        }
    }

    const handleChangeOption = (event, value) => {

        if (value !== undefined) {
            console.log("value>>", value.label);
            setSelectedOption(value.label);
        }
    }

    return (
        <StyledLegendModal>
            <p id="legend"> Filter by:</p>
            <Autocomplete
                id="country-situation"
                sx={{ width: '100%' }}
                onChange={handleSituation}
                options={situationNames}
                autoHighlight
                getOptionLabel={(option) => option.label}
                
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Choose a situation"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    />
                )}
                />
                <Autocomplete
                id="filter-option"
                sx={{ width: '100%' }}
                options={optionNames}
                autoHighlight
                getOptionLabel={(option) => option.label}
                onchange={handleChangeOption}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Choose a Option"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    />
                )}
                />

                <button id="ok" onClick={() => get_CountryColor(selectedSituation, selectedOption)}>OK</button>
            {/* <div>
                <div id="israel"></div>
                <p id="israel">Israel</p>
            </div>
            <div>
                <div id="palestine"></div>
                <p id="palestine">Palestine </p>
            </div>
            <div>
                <div id="neutral"></div>
                <p id="neutral">Neutral</p>
            </div> */}
        </StyledLegendModal>
    )
}

export default LegendModal;
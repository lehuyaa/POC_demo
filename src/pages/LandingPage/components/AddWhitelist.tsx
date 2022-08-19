/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useMutation } from "react-query";

import { Add, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { IWhitelistContractParams, whitelistContractRequest } from "api/wallet";
import CustomThemeProvider from "../../../theme/Provider";

const AddWhitelist = () => {
  const [state, setState] = useState<IWhitelistContractParams>({
    contract_address: "",
    contract_abi: [{ readable_abi: "", required_approval: false }],
    network: "BKC_TESTNET",
    required_approval: false,
  });

  const { mutate, isLoading } = useMutation(whitelistContractRequest);

  const handleSubmit = () => {
    mutate(state);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setState({
      ...state,
      contract_abi: [
        ...state.contract_abi,
        { readable_abi: "", required_approval: false },
      ],
    });
  };

  const handleRemove = (index: number) => {
    const array = state.contract_abi;
    array.splice(index, 1);
    setState({ ...state, contract_abi: array });
  };

  const handleAbiChange = (
    index: number,
    key: string,
    value: boolean | string
  ) => {
    setState({
      ...state,
      contract_abi: state.contract_abi.map((abi, i) => {
        if (i === index) {
          return { ...abi, [key]: value };
        }
        return abi;
      }),
    });
  };

  return (
    <>
      <CustomThemeProvider>
        <Stack spacing={2} sx={{ mt: 2, maxWidth: 720, mx: "auto" }}>
          <TextField
            onChange={handleChange}
            label="Contract address"
            name="contract_address"
            value={state.contract_address}
          />

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.required_approval}
                  onChange={(_, checked) => {
                    handleChange({
                      target: { name: "required_approval", value: checked },
                    } as any);
                  }}
                />
              }
              label="Required approval when calling this contract"
            />

            <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
            >
              <Typography>Contract ABI:</Typography>
              <IconButton onClick={handleAdd}>
                <Add />
              </IconButton>
            </Stack>

            <Stack sx={{ mb: 2 }}>
              {state.contract_abi.map((item, index) => (
                <Stack spacing={1} key={index}>
                  <Stack
                    justifyContent="space-between"
                    direction="row"
                    alignItems="center"
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.contract_abi[index].required_approval}
                          onChange={(_, checked) => {
                            handleAbiChange(
                              index,
                              "required_approval",
                              checked
                            );
                          }}
                        />
                      }
                      label="Required approval when calling this ABI"
                    />
                    <IconButton onClick={() => handleRemove(index)}>
                      <Remove />
                    </IconButton>
                  </Stack>
                  <TextField
                    fullWidth
                    onChange={(e) =>
                      handleAbiChange(index, "readable_abi", e.target.value)
                    }
                    label="Readable ABI"
                    value={state.contract_abi[index].readable_abi}
                  />
                </Stack>
              ))}
            </Stack>
          </FormGroup>

          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={handleSubmit}
            size="large"
          >
            Submit
          </LoadingButton>
        </Stack>
      </CustomThemeProvider>
    </>
  );
};

export default AddWhitelist;

import { Box } from '@interest-protocol/ui-kit';
import { Button, Input } from '@stylin.js/elements';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { ArrowSVG } from '@/components/svg';

const SecretField: FC = () => {
  const { register, reset } = useForm();

  return (
    <Box
      as="form"
      pr="0.125rem"
      display="flex"
      border="1px solid"
      alignItems="center"
      borderRadius="0.5rem"
      borderColor="#F5B72266"
    >
      <Input
        p="1rem"
        bg="none"
        cursor="text"
        border="none"
        outline="none"
        type="password"
        color="#F5B722"
        placeholder="Secret GG"
        {...register('secret')}
      />
      <Button
        all="unset"
        bg="#F5B722"
        type="button"
        display="flex"
        width="2.75rem"
        cursor="pointer"
        height="2.75rem"
        alignItems="center"
        borderRadius="0.25rem"
        justifyContent="center"
        onClick={() => {
          reset();
        }}
      >
        <ArrowSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
      </Button>
    </Box>
  );
};

export default SecretField;

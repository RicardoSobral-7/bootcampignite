import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { setTimeout } from "timers";

type CreateUserFormProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(8, 'A senha precisa de pelo menos 8 caracteres'),
  password_confirmation: yup.string().oneOf(
    [null, yup.ref('password')],
    'As senhas precisam ser iguais'
  ),
})


export default function CreateUser() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })
  const { errors } = formState

  const handleCreate: SubmitHandler<CreateUserFormProps> = async (values) => {
    console.log(values)
    await new Promise(resolve => setTimeout(resolve, 2000))
    reset()
  }

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box
          as="form"
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={["6", '8']}
          onSubmit={handleSubmit(handleCreate)}
        >
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' borderColor='gray.700' />

          <Stack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={["6", '8']} w='100%'>
              <Input name="name" label="Nome Completo" {...register('name')} error={errors.name} />
              <Input name="email" type='email' label="E-mail" {...register('email')} error={errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={["6", '8']} w='100%'>
              <Input name="password" type='password' label="Senha" {...register('password')} error={errors.password} />
              <Input name="password_confirmation" type='password' label="Confirmação da senha" {...register('password_confirmation')} error={errors.password_confirmation} />
            </SimpleGrid>
          </Stack>
          <Flex
            mt='8'
            justify='flex-end'
          >
            <Stack direction='row'>
              <Link href="/users" passHref>
                <Button as="a" colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme='pink' isLoading={formState.isSubmitting}>Salvar</Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
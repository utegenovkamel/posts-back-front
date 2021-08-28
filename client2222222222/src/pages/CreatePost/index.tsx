import React from 'react';
import { createPost } from '../../api/Posts';
import useInputs from '../../hooks/input.hook';
import { Button, Flex, Input, Label, Text } from '../../ui';

const CreatePostPage = () => {
  const name = useInputs('');
  const description = useInputs('');

  const handleCreate = async () => {
    if (name.value && description.value) {
      const res = await createPost({
        name: name.value,
        description: description.value,
      });
      alert(res.data);
    } else {
      alert('Заполните все поля');
    }
  };

  return (
    <Flex flexDirection="column">
      <Text fontSize="30px" strong mb="25px">
        Create post
      </Text>
      <Flex flexDirection="column" width="500px">
        <Flex flexDirection="column" mb="20px">
          <Label htmlFor="name">Enter your name</Label>
          <Input {...name} id="name" type="text" placeholder="Name..." />
        </Flex>
        <Flex flexDirection="column" mb="20px">
          <Label htmlFor="description">Enter your description</Label>
          <Input
            {...description}
            id="description"
            type="text"
            placeholder="Description..."
          />
        </Flex>
        <Button onClick={handleCreate} color="primary">
          Create
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreatePostPage;

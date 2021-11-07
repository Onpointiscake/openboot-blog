import React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag
} from "@choc-ui/chakra-autocomplete";
import { Stack, Text } from "@chakra-ui/react";
const tagsCreated = [
    "React",
    "JavaScript", 
    "HTML",
    "CSS", 
    "AngularJS",
    "Java",
    "Spring",
    "PHP",
    "OpenBoot",
 ];
export default function MultiSelect() {

      
  return (
    <Stack colorScheme="brand" direction="column">
      <Text colorScheme="brand">Multi select with tags</Text>
      <AutoComplete colorScheme="brand" openOnFocus multiple onChange={(vals) => console.log(vals)}>
        <AutoCompleteInput colorScheme="brand" placeholder="Search..." variant="filled">
          {({ tags}) =>
            tags.map((tag, id) => (
              <AutoCompleteTag
                key={id}
                label={tag.label}
                onRemove={tag.onRemove}
              />
            ))
          }
        </AutoCompleteInput>
        <AutoCompleteList>
          {tagsCreated.map((tag, cid) => (
            <AutoCompleteItem colorScheme="brand"
              key={`option-${cid}`}
              value={tagsCreated}
              textTransform="capitalize"
              _selected={{ bg: "whiteAlpha.50" }}
              _focus={{ bg: "whiteAlpha.100" }}
            >
              {tag}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </Stack>
  );
}

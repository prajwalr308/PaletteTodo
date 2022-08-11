import { View, Text } from 'react-native'
import React from 'react'
import { AlertDialog, Button } from 'native-base'

const AlertDialogBox = (props) => {


  const onClose = () => props.setIsOpen(false);
  const cancelRef = React.useRef(null);
  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={props.isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header></AlertDialog.Header>
          <AlertDialog.Body>
          {props.title}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                continue
              </Button>
              
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
  )
}

export default AlertDialogBox
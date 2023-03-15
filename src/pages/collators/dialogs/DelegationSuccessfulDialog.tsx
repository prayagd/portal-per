import { Button, Modal } from "react-daisyui";
import { h } from "preact";
import { CloseButton } from "../../../components/CloseButton";
import SuccessDialogIcon from "../../../assets/success-dialog";

interface DelegationSuccessfulDialogProps {
  visible: boolean;
  message: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

function DelegationSuccessfulDialog(props: DelegationSuccessfulDialogProps) {
  const { visible, message, onClose, onConfirm } = props;

  return (
    <Modal open={visible}>
      <Modal.Header className="font-bold">Settlement Confirmation</Modal.Header>
      <CloseButton onClick={onClose} />
      <Modal.Body>
        <div className="flex flex-col items-center justify-between">
          <SuccessDialogIcon />
          <div className="mt-4" />
          <div className="text-md text-neutral-content">
            {message}
          </div>
        </div>
      </Modal.Body>

      <Modal.Actions className="justify-center">
        <Button className="px-6" color="primary" onClick={onConfirm}>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DelegationSuccessfulDialog;
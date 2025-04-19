"use client"

import React, {useEffect, useState} from "react";
import {Button, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/react";


interface CanvasSnapshotProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const CanvasSnapshot: React.FC<CanvasSnapshotProps> = ({ isOpen, onOpenChange }) => {
    const [imageData, setImageData] = useState<string | undefined>(undefined);

    // load image data (base64) when opening the modal
    useEffect(() => {
        const canvas = document.querySelector('canvas');
        if (!canvas || !isOpen) {
            setImageData(undefined);
        } else {
            const strMime = 'image/png';
            const strDownloadMime = "image/octet-stream";
            const data = canvas.toDataURL(strMime).replace(strMime, strDownloadMime);
            setImageData(data);
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            Snapshot
                        </ModalHeader>
                        <ModalBody>
                            Do you want to download an image of the current plot?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" variant="light" as={Link} download="complexify-snapshot.png" href={imageData}>
                                Download
                            </Button>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default CanvasSnapshot;
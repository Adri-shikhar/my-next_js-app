"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function ModalForm({ createATask }) {
    return (
        <Modal>
            <Button variant="secondary">Open Contact Form</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we&apos;ll get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createATask} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="id" type="text">
                                        <Label>Id</Label>
                                        <Input placeholder="Enter id" />
                                    </TextField>
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter name" />
                                    </TextField>
                                    <TextField className="w-full" name="description" type="text">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter description" />
                                    </TextField>
                                    <TextField className="w-full" name="price" type="text">
                                        <Label>Price</Label>
                                        <Input placeholder="Enter price" />
                                    </TextField>
                                    <TextField className="w-full" name="category" type="text">
                                        <Label>Category</Label>
                                        <Input placeholder="Enter category" />
                                    </TextField>
                                    <TextField className="w-full" name="stock" type="text">
                                        <Label>Stock</Label>
                                        <Input placeholder="Enter stock" />
                                    </TextField>
                                    <TextField className="w-full" name="rating" type="text">
                                        <Label>Rattings</Label>
                                        <Input placeholder="Enter rating" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Send Message</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
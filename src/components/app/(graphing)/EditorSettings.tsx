"use client"

import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/modal";
import {Button, Checkbox, NumberInput, Slider, Tab, Tabs} from "@heroui/react";
import {useStore} from "@/zustand/store";


interface EditorSettingsProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const EditorSettings: React.FC<EditorSettingsProps> = ({ isOpen, onOpenChange }) => {
    const cachedGraphSettings = useStore(state => state.graphSettings);
    const cachedDcSettings = useStore(state => state.domainColoring);
    const cachedRsSettings = useStore(state => state.riemannSphere);
    const setCachedSettings = useStore(state => state.setSettings);

    /////////////////////////////////////////////////////////////////////////////////////////

    const [showDarkGridLines, setShowDarkGridLines] = useState(false);
    const [showLightGridLines, setShowLightGridLines] = useState(false);
    const [isMinimalThemeEnabled, setIsMinimalThemeEnabled] = useState(false);

    /////////////////////////////////////////////////////////////////////////////////////////

    const [dcMinX, setDcMinX] = useState<number>(-2);
    const [dcMaxX, setDcMaxX] = useState<number>(2);
    const [dcMinY, setDcMinY] = useState<number>(-2);
    const [dcMaxY, setDcMaxY] = useState<number>(2);

    /////////////////////////////////////////////////////////////////////////////////////////

    const [rsSubdivisions, setRsSubdivisions] = useState<number>(100);
    const [isRsDcVisible, setIsRsDcVisible] = useState<boolean>(false);
    const [rsDcOpacity, setRsDcOpacity] = useState<number>(0.7);
    const [showRsDcAxes, setShowRsDcAxes] = useState<boolean>(true);


    /////////////////////////////////////////////////////////////////////////////////////////

    // load configs from cache on mount
    useEffect(() => {
        setShowDarkGridLines(cachedGraphSettings.showDarkGridLines);
        setShowLightGridLines(cachedGraphSettings.showLightGridLines);
        setIsMinimalThemeEnabled(cachedGraphSettings.isMinimalThemeEnabled);

        setDcMinX(cachedDcSettings.domain.x.min);
        setDcMaxX(cachedDcSettings.domain.x.max);
        setDcMinY(cachedDcSettings.domain.y.min);
        setDcMaxY(cachedDcSettings.domain.y.max);

        setRsSubdivisions(cachedRsSettings.geometry.subdivisions);
        setIsRsDcVisible(cachedRsSettings.domainColoring.visible);
        setRsDcOpacity(cachedRsSettings.domainColoring.opacity);
        setShowRsDcAxes(cachedRsSettings.domainColoring.showAxes);
    }, [cachedGraphSettings, cachedDcSettings, cachedRsSettings]);

    function save() {
        setCachedSettings(
            // graph settings
            {
                showDarkGridLines,
                showLightGridLines,
                isMinimalThemeEnabled
            },
            // domain coloring
            {
                domain: {
                    x: { min: dcMinX, max: dcMaxX },
                    y: { min: dcMinY, max: dcMaxY },
                }
            },
            {
                geometry: {
                    subdivisions: rsSubdivisions
                },
                domainColoring: {
                    visible: isRsDcVisible,
                    opacity: rsDcOpacity,
                    showAxes: showRsDcAxes,
                    settings: {
                        domain: {
                            x: { min: dcMinX, max: dcMaxX },
                            y: { min: dcMinY, max: dcMaxY },
                        }
                    }
                }
            }
        );
    }

    /////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            Settings
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full flex flex-col">
                                <Tabs>

                                    {/* General Settings */}
                                    <Tab key="general" title="General" className="flex flex-col gap-2">
                                        <Checkbox isSelected={showDarkGridLines} onValueChange={setShowDarkGridLines}>
                                            Show dark grid lines
                                        </Checkbox>
                                        <Checkbox isSelected={showLightGridLines} onValueChange={setShowLightGridLines}>
                                            Show light grid lines
                                        </Checkbox>
                                        <Checkbox isSelected={isMinimalThemeEnabled} onValueChange={setIsMinimalThemeEnabled}>
                                            Minimal theme
                                        </Checkbox>
                                    </Tab>

                                    {/* Domain Coloring Settings */}
                                    <Tab key="domain-coloring" title="Domain Coloring">

                                        {/* Real Axis */}
                                        <fieldset className="mb-3 flex flex-col">
                                            <legend className="font-bold">
                                                Real Axis
                                            </legend>
                                            <div className="mt-2 flex gap-3">
                                                <NumberInput value={dcMinX} onValueChange={setDcMinX} label="Min" />
                                                <NumberInput value={dcMaxX} onValueChange={setDcMaxX} label="Max" />
                                            </div>
                                        </fieldset>

                                        {/* Imaginary Axis */}
                                        <fieldset className="flex flex-col">
                                            <legend className="font-bold">
                                                Imaginary Axis
                                            </legend>
                                            <div className="mt-2 flex gap-3">
                                                <NumberInput value={dcMinY} onValueChange={setDcMinY} label="Min"/>
                                                <NumberInput value={dcMaxY} onValueChange={setDcMaxY} label="Max"/>
                                            </div>
                                        </fieldset>

                                    </Tab>

                                    {/* Riemann Sphere Settings */}
                                    <Tab key="riemann-sphere" title="Riemann Sphere">

                                        {/* Geometry for the sphere */}
                                        <fieldset className="mb-3 flex flex-col">
                                            <legend className="font-bold">
                                                Geometry
                                            </legend>
                                            <div className="mt-2 flex flex-col gap-2">
                                                <Slider
                                                    className="w-full"
                                                    label="Subdivisions"
                                                    value={rsSubdivisions}
                                                    onChange={setRsSubdivisions as unknown as any}
                                                    minValue={10}
                                                    maxValue={200}
                                                    step={10}
                                                />
                                            </div>
                                        </fieldset>

                                        {/* Settings for the domain coloring under the sphere */}
                                        <fieldset className="mb-3 flex flex-col gap-2">
                                            <legend className="font-bold">
                                                Domain Coloring
                                            </legend>
                                            <div className="mt-2 flex flex-col gap-2">
                                                <Checkbox isSelected={isRsDcVisible} onValueChange={setIsRsDcVisible}>
                                                    Visible
                                                </Checkbox>
                                                <Checkbox isDisabled={!isRsDcVisible} isSelected={showRsDcAxes} onValueChange={setShowRsDcAxes}>
                                                    Show axes
                                                </Checkbox>
                                                <Slider
                                                    label="Opacity"
                                                    isDisabled={!isRsDcVisible}
                                                    value={rsDcOpacity}
                                                    onChange={setRsDcOpacity as unknown as any}
                                                    minValue={0}
                                                    maxValue={1}
                                                    step={0.1}
                                                />
                                            </div>
                                        </fieldset>
                                    </Tab>

                                </Tabs>
                            </div>
                        </ModalBody>

                        {/* Footer (Save / Cancel) */}
                        <ModalFooter>
                            <Button onPress={() => {save(); onClose()}} color="primary" variant="light">
                                Save
                            </Button>
                            <Button color="danger" onPress={onClose} variant="light">
                                Cancel
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default EditorSettings;
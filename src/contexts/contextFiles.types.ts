import React from "react"
import { NavigationType } from "react-router-dom"

export type formData = {
    userEmail: string,
    userPwd: string
}

export type locationProp = {
    state?: {
        from?: {
            pathname?: string
        }
    }
}

export type childrenProp = {
    children: React.ReactNode
}

export type authContextProps = {
    isUserLoggedIn: boolean,
    setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    formData: formData,
    setFormData: React.Dispatch<React.SetStateAction<formData>>,
    signUpErrMsg: string,
    setSignUpErrMsg: React.Dispatch<React.SetStateAction<string>>,
    logInErrMsg: string,
    setLogInErrMsg: React.Dispatch<React.SetStateAction<string>>
}

export type note = {
    _id: string,
    title: string,
    description: string,
    currDate: string,
    canEdit: boolean,
    isPinned: boolean,
    bgColor: string,
    colorPalette: boolean,
    labelInput: boolean,
    label: string,
    isArchived: boolean,
    isDeleted: boolean
}

export type crudAction =
    | {
        type: "ADD_NOTE",
        payload: { _title: string, _description: string }
    }
    | {
        type: "EDIT_NOTE",
        payload: note
    }
    | {
        type: "SAVE_NOTE",
        payload: note
    }
    | {
        type: "UPDATE_NOTE_TITLE",
        payload: { note: note, value: string }
    }
    | {
        type: "UPDATE_NOTE_DESCRIPTION",
        payload: { note: { _id: string }, value: string }
    }
    | {
        type: "DELETE_NOTE",
        payload: note
    }
    | {
        type: "PIN_THE_NOTE",
        payload: note
    }
    | {
        type: "UNPIN_THE_NOTE",
        payload: note
    }
    | {
        type: "COLOR_PALETTE_DISPLAY",
        payload: note
    }
    | {
        type: "NOTE_BACKGROUND_COLOR",
        payload: { note: note, bgColor: string }
    }
    | {
        type: "LABEL_INPUT_DISPLAY",
        payload: note
    }
    | {
        type: "ADD_LABEL",
        payload: { note: note, label: any }
    }
    | {
        type: "ARCHIVE_NOTE",
        payload: note
    }
    | {
        type: "RESTORE_NOTE",
        payload: note
    };

export type eventClick = {
    e: React.MouseEvent<HTMLElement>
}

export type eventChange = {
    e: React.ChangeEvent<HTMLInputElement>
}

export type crudOperationContextProps = {
    stateOfNotes: any[] | note[],
    dispatchOfNotes: React.Dispatch<crudAction>,
    labelInput: string,
    setLabelInput: React.Dispatch<React.SetStateAction<string>>,
    getTheLabel: ({ e }: eventChange) => void
}

export type filterAndSortType = {
    SortByDate: string,
    FilterByCategory: string,
    FilterByLabels: any[],
}

export type filterAndSortAction =
    | {
        type: "SORT_BY_DATE",
        payload: string
    }
    | {
        type: "FILTER_BY_CATEGORY",
        payload: string
    }
    | {
        type: "FILTER_BY_LABELS",
        payload: string
    }
    | {
        type: "CLEAR_FILTERS"
    };

export type filterAndSortContextProps = {
    filterAndSortState: filterAndSortType,
    filterAndSortDispatch: React.Dispatch<filterAndSortAction>
}

export type headerContextProps = {
    popUpFilterAndSortDisplay: string,
    popUpSearchBarDisplay: string,
    getThePopUpSearchBarDisplay: () => void,
    getThePopUpFilterAndSortDisplay: () => void,
    closeThePopUpFilterAndSort: () => void
}

export type textBoxObjType = {
    headingDisplay: string,
    formContentDisplay: string,
    titleText: string,
    descriptiveText: string
}

export type textBoxAction =
    | {
        type: "EXPAND_TEXTBOX"
    }
    | {
        type: "CLOSE_TEXTBOX"
    }
    | {
        type: "UPDATE_TEXTBOX_TITLE",
        payload: string
    }
    | {
        type: "UPDATE_TEXTBOX_DESCRIPTION",
        payload: string
    };

export type textBoxContextProps = {
    stateOfTextBox: textBoxObjType,
    dispatchOfTextBox: React.Dispatch<textBoxAction>
}

export type authSignupServiceProp = {
    formData: formData,
    setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    setFormData: React.Dispatch<React.SetStateAction<formData>>,
    setSignUpErrMsg: React.Dispatch<React.SetStateAction<string>>
}

export type authloginServiceProp = {
    formData: formData,
    setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    setFormData: React.Dispatch<React.SetStateAction<formData>>,
    setLogInErrMsg:React.Dispatch<React.SetStateAction<string>>
}
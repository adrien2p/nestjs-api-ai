'use strict';

import { HttpStatus } from '@nestjs/common';
import { IErrorMessages } from './interfaces/IErrorMessages';

export const errorMessagesConfig: { [messageCode: string]: IErrorMessages } = {
    'user:missingInformation': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameters on the user.',
        userMessage: "Des informations sont manquantes sur l'utilisateur."
    },
    'user:missingFirstName': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter first name on the user.',
        userMessage: 'Veuillez indiquer votre prénom.'
    },
    'user:missingLastName': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter last name on the user.',
        userMessage: 'Veuillez indiquer votre nom.'
    },
    'user:missingEmail': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter email on the user.',
        userMessage: 'Veuillez indiquer votre adresse e-mail.'
    },
    'user:missingPassword': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter password on the user.',
        userMessage: 'Veuillez indiquer votre mot de passe.'
    },
    'user:emailAlreadyExist': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Warning, Email already exist.',
        userMessage: "L'adresse e-mail que vous avez fourni est déjà utilisé."
    },
    'user:missingId': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter id.',
        userMessage: "Veuillez fournir un id valid."
    },
    'user:notFound': {
        type: 'notFound',
        httpStatus: HttpStatus.NOT_FOUND,
        errorMessage: 'Unable to found the user with the provided information.',
        userMessage: 'Aucun utilisateur trouvé avec les informations fourni.'
    },
    'request:unauthorized': {
        type: 'unauthorized',
        httpStatus: HttpStatus.UNAUTHORIZED,
        errorMessage: 'Access unauthorized.',
        userMessage: 'Accès non autorisé.'
    },
    'auth:login:missingEmail': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Unable to connect the user without email.',
        userMessage: 'Veuillez indiquer votre adresse e-mail.'
    },
    'auth:login:missingPassword': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Unable to connect the user without password.',
        userMessage: 'Veuillez indiquer votre mot de passe.'
    },
    'action:missingAgentName': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter agent name on the action.',
        userMessage: "Veuillez indiquer le nom de l'agent concerné."
    },
    'action:missingActionName': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter action name on the action.',
        userMessage: "Veuillez indiquer le nom de l'action concerné."
    },
    'action:missingRequestId': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter request id on the action.',
        userMessage: "Veuillez indiquer l'identifiant de la requête concerné."
    },
    'action:missingData': {
        type: 'BadRequest',
        httpStatus: HttpStatus.BAD_REQUEST,
        errorMessage: 'Missing parameter data on the action.',
        userMessage: "Veuillez indiquer les données de l'action concerné."
    }
};

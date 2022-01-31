from typing import List, Optional

from pydantic import BaseModel, HttpUrl


class OpenIDConfiguration(BaseModel):
    """
    OpenID Provider Metadata

    Conforms to OpenID Connect Discovery 1.0 specification.
    https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
    """

    issuer: HttpUrl
    authorization_endpoint: HttpUrl
    token_endpoint: HttpUrl
    userinfo_endpoint: HttpUrl
    jwks_uri: HttpUrl
    registration_endpoint: HttpUrl
    scopes_supported: List[str]
    response_types_supported: List[str]
    response_modes_supported: Optional[List[str]] = None
    grant_types_supported: Optional[List[str]] = None
    acr_values_supported: Optional[List[str]] = None
    subject_types_supported: List[str]
    id_token_signing_alg_values_supported: List[str]
    id_token_encryption_alg_values_supported: Optional[List[str]] = None
    id_token_encryption_enc_values_supported: Optional[List[str]] = None
    userinfo_signing_alg_values_supported: Optional[List[str]] = None
    userinfo_encryption_alg_values_supported: Optional[List[str]] = None
    userinfo_encryption_enc_values_supported: Optional[List[str]] = None
    request_object_signing_alg_values_supported: Optional[List[str]] = None
    request_object_encryption_alg_values_supported: Optional[List[str]] = None
    request_object_encryption_enc_values_supported: Optional[List[str]] = None
    token_endpoint_auth_methods_supported: Optional[List[str]] = None
    token_endpoint_auth_signing_alg_values_supported: Optional[List[str]] = None
    display_values_supported: Optional[List[str]] = None
    claim_types_supported: Optional[List[str]] = None
    claims_supported: Optional[List[str]] = None
    service_documentation: Optional[HttpUrl] = None
    claims_locales_supported: Optional[List[str]] = None
    ui_locales_supported: Optional[List[str]] = None
    claims_parameter_supported: Optional[bool] = None
    request_parameter_supported: Optional[bool] = None
    request_uri_parameter_supported: Optional[bool] = None
    require_request_uri_registration: Optional[bool] = None
    op_policy_uri: Optional[HttpUrl] = None
    op_tos_uri: Optional[HttpUrl] = None